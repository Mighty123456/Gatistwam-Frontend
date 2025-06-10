/**
 * Get the correct path for an asset
 * @param path - The relative path to the asset
 * @returns The correct public path for the asset
 */
export const getAssetPath = (path: string): string => {
  // Remove any leading slashes
  const cleanPath = path.replace(/^\/+/, '');
  
  // If the path starts with 'src/', remove it
  const publicPath = cleanPath.replace(/^src\//, '');
  
  // Add leading slash for absolute path
  return `/${publicPath}`;
};

/**
 * Get the correct path for an image
 * @param imageName - The name of the image file
 * @returns The correct public path for the image
 */
export const getImagePath = (imageName: string): string => {
  return getAssetPath(`assets/images/${imageName}`);
};

/**
 * Get the correct path for a video
 * @param videoName - The name of the video file
 * @returns The correct public path for the video
 */
export const getVideoPath = (videoName: string): string => {
  return getAssetPath(`assets/videos/${videoName}`);
}; 