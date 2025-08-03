'use client';

import { useState } from 'react';

interface PhotosProps {
  formData: any;
  setFormData: (data: any) => void;
}

export default function Photos({ formData, setFormData }: PhotosProps) {
  const [photos, setPhotos] = useState<string[]>(formData.photos || []);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileUpload = (files: FileList | null) => {
    if (!files) return;

    const newPhotos = Array.from(files).map((file) => {
      return URL.createObjectURL(file);
    });

    const updatedPhotos = [...photos, ...newPhotos];
    setPhotos(updatedPhotos);
    setFormData({
      ...formData,
      photos: updatedPhotos
    });
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    handleFileUpload(files);
  };

  const removePhoto = (index: number) => {
    const updatedPhotos = photos.filter((_, i) => i !== index);
    setPhotos(updatedPhotos);
    setFormData({
      ...formData,
      photos: updatedPhotos
    });
  };

  const movePhoto = (fromIndex: number, toIndex: number) => {
    const updatedPhotos = [...photos];
    const [movedPhoto] = updatedPhotos.splice(fromIndex, 1);
    updatedPhotos.splice(toIndex, 0, movedPhoto);
    setPhotos(updatedPhotos);
    setFormData({
      ...formData,
      photos: updatedPhotos
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Photos</h2>
        <p className="text-gray-600 mb-8">Add photos to showcase your property. The first photo will be your cover photo.</p>
      </div>

      {/* Upload Area */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          isDragging
            ? 'border-blue-400 bg-blue-50'
            : 'border-gray-300 hover:border-gray-400'
        }`}
      >
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="ri-camera-line text-2xl text-gray-600"></i>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Upload Photos</h3>
          <p className="text-gray-600 mb-4">
            Drag and drop your photos here, or click to select files
          </p>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={(e) => handleFileUpload(e.target.files)}
            className="hidden"
            id="photo-upload"
          />
          <label
            htmlFor="photo-upload"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer"
          >
            <i className="ri-upload-cloud-line mr-2"></i>
            Choose Files
          </label>
        </div>
      </div>

      {/* Photo Grid */}
      {photos.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Uploaded Photos ({photos.length})
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="relative group aspect-square bg-gray-100 rounded-lg overflow-hidden"
              >
                <img
                  src={photo}
                  alt={`Property photo ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Cover Photo Badge */}
                {index === 0 && (
                  <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                    Cover Photo
                  </div>
                )}

                {/* Photo Controls */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="flex space-x-2">
                    {index > 0 && (
                      <button
                        onClick={() => movePhoto(index, index - 1)}
                        className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                        title="Move Left"
                      >
                        <i className="ri-arrow-left-line text-gray-600"></i>
                      </button>
                    )}
                    {index < photos.length - 1 && (
                      <button
                        onClick={() => movePhoto(index, index + 1)}
                        className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                        title="Move Right"
                      >
                        <i className="ri-arrow-right-line text-gray-600"></i>
                      </button>
                    )}
                    <button
                      onClick={() => removePhoto(index)}
                      className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
                      title="Remove Photo"
                    >
                      <i className="ri-delete-bin-line"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Photo Tips */}
      <div className="bg-yellow-50 p-6 rounded-lg">
        <h4 className="font-semibold text-yellow-900 mb-2">Photo Tips</h4>
        <ul className="text-sm text-yellow-800 space-y-1">
          <li>• Upload at least 5 high-quality photos</li>
          <li>• Include photos of the bedroom, bathroom, kitchen, and common areas</li>
          <li>• Use natural lighting for better results</li>
          <li>• Make sure rooms are clean and well-organized</li>
          <li>• The first photo will be your cover photo - make it count!</li>
        </ul>
      </div>
    </div>
  );
}