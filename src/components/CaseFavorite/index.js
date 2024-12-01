import React from 'react';
import './index.css';

const CaseFavorite = () => {
  return (
    <div className="caseFavoriteContainer">
      {/* Pin symbol and text */}
      <div className="pinSection">
        <img
          src="https://img.icons8.com/ios-filled/50/000000/pin.png" // Pin Icon
          alt="Pin"
          className="pinIcon"
        />
        <span className="caseFavoriteText">Case Favorite</span>
      </div>

      {/* Photo upload section */}
      <div className="photoUploadSection">
        <label htmlFor="file-upload" className="uploadLabel">
          <img
            src="https://img.icons8.com/ios-filled/50/000000/upload.png" // Upload Icon
            alt="Upload"
            className="uploadIcon"
          />
          <span className="uploadText">Upload Photo</span>
        </label>
        <input
          id="file-upload"
          type="file"
          className="fileInput"
        />
      </div>
    </div>
  );
};

export default CaseFavorite;
