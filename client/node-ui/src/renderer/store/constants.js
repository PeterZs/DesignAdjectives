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
  LOAD_SNIPPET_SETTINGS: 'Load Snippet Settings',
  LOAD_NEW_FILE: 'Load Backend File',
  DETECT_BACKEND: 'Detect Backend Type',
  SET_PARAM: 'Set Parameter',
  SET_PARAMS: 'Set All Parameters',
  COMMIT_PARAMS: 'Commit Parameters',
  SNAPSHOT: 'Create Snapshot',
  RESET_SNAPSHOT: 'Reset Snapshot State',
  SET_BACKEND_SETTING: 'Set Backend Setting',
  COPY_SNIPPET: 'Copy Snippet',
  RENAME_SNIPPET: 'Rename Snippet',
  CLEAR_CACHE: 'Clear Snippet Cache'
};

export const ACTION = {
  NEW_SNIPPET: 'New Snippet',
  DELETE_SNIPPET: 'Delete Snippet',
  TRAIN: 'Train Snippet',
  LOAD_SNIPPET: 'Load Snippet',
  ADD_EXAMPLE: 'Add Example',
  DELETE_EXAMPLE: 'Delete Example',
  SYNC: 'Sync with Snippet Server',
  CONNECT: 'Connect to Snippet Server',
  START_SAMPLER: 'Start Sampling',
  STOP_SAMPLER: 'Stop Sampling',
  DISCONNECT: 'Disconnect from Snippet Server',
  SET_ACTIVE_SNIPPET: 'Set Active Snippet',
  LOAD_SNIPPETS: 'Load Snippets',
  EVAL_CURRENT: 'Evaluate Current State with Current Snippet',
  LOAD_PARAM_COLOR_DATA: 'Load Preference Data for Current Parameters',
  SET_PARAM: 'Set Parameter',
  COMMIT_PARAMS: 'Commit Parameters',
  SHOW_TEMPORARY_STATE: 'Show Temporary Snapshot State',
  HIDE_TEMPORARY_STATE: 'Hide Temporary Snapshot State',
  LOCK_TEMPORARY_STATE: 'Lock Temporary Snapshot State',
  COPY_SNIPPET: 'Copy Snippet',
  RENAME_SNIPPET: 'Rename Snippet',
  GENERATE_RANDOM: 'Generate Random Set'
};

export const SERVER_STATUS = {
  TRAIN: 'Training',
  SAMPLE: 'Sampling',
  IDLE: 'Idle'
};
