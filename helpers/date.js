const moment = require('moment');

const utcFormat = 'YYYY-MM-DDTHH:mm:ss.SSSZ';

function nowTimestampUtcString() {
  const nowUtc = moment.utc();
  return nowUtc.format(utcFormat);
}

function convertEpochWithMsToTimestampUtcString(epochWithMilliseconds) {
  let validEpoch = epochWithMilliseconds;
  // TODO: this was to protect against MySQL weirdness; determine if this necessary;
  if (epochWithMilliseconds < 1000) {
    validEpoch = 1000;
  }
  const utc = moment(validEpoch).utc();
  return utc.format(utcFormat);
}

function convertTimeStampUtcStringToEpochWithMs(timestamp) {
  const utc = moment(timestamp).utc();
  return utc.valueOf();
}

module.exports = {
  utcFormat,
  nowTimestampUtcString,
  convertEpochWithMsToTimestampUtcString,
  convertTimeStampUtcStringToEpochWithMs,
}