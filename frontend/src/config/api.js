// Local file configuration - no backend needed
export const LOCAL_CONFIG = {
  // Local file paths
  VIDEOS_PATH: '/videos/',
  LOGOS_PATH: '/logos/',
};

// Helper functions for local files
export const getVideoUrl = (filename) => {
  return `${LOCAL_CONFIG.VIDEOS_PATH}${filename}`;
};

export const getLogoUrl = (filename) => {
  return `${LOCAL_CONFIG.LOGOS_PATH}${filename}`;
};

