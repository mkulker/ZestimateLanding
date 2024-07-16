import React, { useState, useEffect } from 'react';

const ImageComponent = (props) => {
    const [imageUrl, setImageUrl] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await fetch('your_api_endpoint_here');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const imageData = await response.json();
                setImageUrl(imageData.url); // Assuming your API response provides an 'url' field
            } catch (error) {
                console.error('Error fetching image:', error);
                setError(true); // Set error state if fetching image fails
            }
        };

        fetchImage();
    }, []);

    // Use a local backup image URL
    const backupImageUrl = '/path_to_your_backup_image.png';

    return (
        <div>
            {error ? (
                <img src={backupImageUrl} alt="Backup Image" />
            ) : (
                <img src={imageUrl || backupImageUrl} alt="Image" />
            )}
        </div>
    );
};

export default ImageComponent;
