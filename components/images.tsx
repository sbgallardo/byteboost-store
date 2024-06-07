import React, { useState, ChangeEvent } from 'react';

const uploadImage = (file: File) => {
  // Aquí puedes agregar la lógica para guardar la imagen
  console.log('Subiendo imagen:', file);
};

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      uploadImage(file);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
    </div>
  );
};

export default ImageUploader;