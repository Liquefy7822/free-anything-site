// Simulated download progress
function startDownload(type) {
    const progressBar = document.getElementById(`${type}-progress`);
    const button = document.querySelector(`#${type}-card .download-btn`);
    
    // Create progress bar inner div if it doesn't exist
    if (!progressBar.querySelector('div')) {
        const progressInner = document.createElement('div');
        progressBar.appendChild(progressInner);
    }
    
    const progress = progressBar.querySelector('div');
    let width = 0;
    button.disabled = true;
    
    // Funny messages for each type
    const messages = {
        wifi: [
            "Downloading WiFi waves...",
            "Compressing internet...",
            "Optimizing router settings...",
            "Downloading 5G capabilities..."
        ],
        data: [
            "Downloading bytes...",
            "Compressing gigabytes...",
            "Optimizing data packets...",
            "Installing unlimited plan..."
        ],
        storage: [
            "Creating virtual space...",
            "Expanding drive capacity...",
            "Downloading extra gigabytes...",
            "Optimizing cloud storage..."
        ],
        battery: [
            "Capturing electronic charge...",
            "Downloading battery cells...",
            "Optimizing power usage...",
            "Installing battery boost..."
        ]
    };

    let messageIndex = 0;
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            button.textContent = "Download Complete!";
            setTimeout(() => {
                button.textContent = `Download ${type.charAt(0).toUpperCase() + type.slice(1)}`;
                progress.style.width = "0%";
                button.disabled = false;
            }, 3000);
            return;
        }

        width += 2;
        progress.style.width = width + "%";
        
        // Update button text with funny messages
        if (width % 25 === 0) {
            button.textContent = messages[type][messageIndex];
            messageIndex = (messageIndex + 1) % messages[type].length;
        }
    }, 100);
}

// Function to update real download links
function updateDownloadLinks(links) {
    // Replace these with your actual file URLs
    const fileLinks = {
        wifi: links.wifi || "#",
        data: links.data || "#",
        storage: links.storage || "#",
        battery: links.battery || "#"
    };

    // Update each download link
    Object.keys(fileLinks).forEach(type => {
        const link = document.getElementById(`${type}-real-link`);
        if (link && fileLinks[type]) {
            link.href = fileLinks[type];
        }
    });
}

// Initialize download links
// Replace these with your actual file URLs when implementing
updateDownloadLinks({
    wifi: "#",
    data: "#",
    storage: "#",
    battery: "#"
});
