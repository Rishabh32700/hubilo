import React, { useState } from 'react';
import './AddSpeaker.css'; // CSS for the styling

const speakersList = [
    { id: 1, name: 'Eleanor Pena', title: 'President of Sales', organization: 'XYZ Organisation' },
    { id: 2, name: 'Esther Howard', title: 'Marketing Coordinator', organization: 'XYZ Organisation' },
    { id: 3, name: 'Albert Flores', title: 'Nursing Assistant', organization: 'XYZ Organisation' },
    { id: 4, name: 'John Doe', title: 'Marketing Head', organization: 'XYZ Organisation' },

    // Add more speakers as needed
];

const AddSpeaker = ({ isOpen, onClose }) => {
    const [search, setSearch] = useState('');
    const [selectedSpeakers, setSelectedSpeakers] = useState([]);

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const toggleSpeakerSelection = (speakerId) => {
        setSelectedSpeakers((prev) =>
            prev.includes(speakerId)
                ? prev.filter((id) => id !== speakerId)
                : [...prev, speakerId]
        );
    };

    const filteredSpeakers = speakersList.filter((speaker) =>
        speaker.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            {isOpen && <div className="backdrop" onClick={onClose}></div>}

            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <h2>Add Speaker</h2>
                    <button className='closeButton' onClick={onClose}>x</button>
                </div>
                <input
                    type="text"
                    placeholder="Search speakers..."
                    value={search}
                    onChange={handleSearchChange}
                    className="search-bar"
                />
                <div className="speakers-list">
                    {filteredSpeakers.map((speaker) => (
                        <div
                            key={speaker.id}
                            className={`speaker-item ${selectedSpeakers.includes(speaker.id) ? 'selected' : ''
                                }`}
                        >
                            <div className="speaker-info">
                                <img
                                    src="https://via.placeholder.com/50"
                                    alt={speaker.name}
                                    className="speaker-avatar"
                                />
                                <div>
                                    <h4 className="speaker-name">{speaker.name}</h4>
                                    <p className="speaker-details">{speaker.title} | {speaker.organization}</p>
                                    <a href="#" className="edit-speaker">Edit Speaker</a>
                                </div>
                            </div>
                            <input
                                type="checkbox"
                                className="speaker-checkbox"
                                checked={selectedSpeakers.includes(speaker.id)}
                                onChange={() => toggleSpeakerSelection(speaker.id)}
                            />
                        </div>
                    ))}
                </div>
                <div className="saveButtonContainer">
                    <button disabled={selectedSpeakers.length === 0} className="save-button">
                        Save
                    </button>
                </div>
            </div>
        </>
    );
};

export default AddSpeaker;
