export const PARAM_COLOR_MODE = {
  REDGREEN: 'red-green',
  BLUEGREEN: 'blue-green',
  REDBLUE: 'red-blue',
  GREYSCALE: 'grey',
  BLUEYELLOW: 'blue-yellow'
};

export const MUTATION = {
  SET_PORT: 'Set Snippet Port',
  CONNECT: 'Connect Snippet Server Driver',
  DISCONNECT: 'Disconnect Snippet Server Driver',
  STATUS_UPDATE: 'Server Status Update',
  NEW_SNIPPET: 'New Snippet',
  DELETE_SNIPPET: 'Delete Snippet',
  ADD_EXAMPLE: 'Add Example',
  DELETE_EXAMPLE: 'Delete Example',
  ADD_TRAINED_DATA: 'Add Training Data to Snippet',
  SET_ACTIVE_SNIPPET: 'Set Active Snippet',
  UPDATE_ACTIVE_SNIPPET: 'Update Active Snippet',
  CLEAR_SAMPLES: 'Clear Samples',
  ADD_SAMPLE: 'Add Sample',
  SET_SERVER_STATUS_IDLE: 'Server Status: Idle',
  SET_SERVER_STATUS_TRAIN: 'Server Status: Training',
  SET_SERVER_STATUS_SAMPLE: 'Server Status: Sampling',
  EXPORT_SNIPPETS: 'Export Snippets',
  CACHE_SNIPPETS: 'Cache Snippets',
  LOAD_SNIPPETS: 'Load Cached Snippets',
  IMPORT_SNIPPETS: 'Import Snippets from File',
  SET_ACTIVE_SNIPPET_SCORE: 'Set Active Snippet Score',
  SET_PARAM_COLOR_DATA: 'Set Parameter Color Data',
  SET_SNIPPET_SETTING: 'Set Snippet Setting',
  LOAD_SNIPPET_SETTINGS: 'Load Snippet Settings'
};

export const ACTION = {
  CONNECT: 'Connect to Snippet Server'
};
