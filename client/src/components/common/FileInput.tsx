import React, { ChangeEvent, useState } from 'react';

const FileInput: React.FC<{ onChange: (file: File) => void }> = ({ onChange }) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
            if (file.type.startsWith('image/')) {
                setSelectedFile(file);
                onChange(file);
            } else {
                alert('Please select an image file.');
            }
        }
    };

    return (
        <div>
            <h2 className="text-text/75 pb-2">Profile Picture</h2>
            <label className="flex items-center justify-between w-full mb-2">
                <input
                    type="file"
                    className="sr-only"
                    accept="image/*"
                    onChange={handleFileChange}
                />
                <div className="w-full flex justify-between items-center">
                    <div className="bg-primary px-6 py-4 hover:scale-105 active:scale-95 duration-200 rounded-lg">Select File</div>
                    <h2 className="text-text/75 pb-2">{selectedFile?.name}</h2>
                </div>
            </label>
        </div>
    );
};

export default FileInput;
