import React, { useState } from 'react';

import './App.css';


interface Song {
	id: number,
	artist: string,
	title: string
}

function App() {
	// för att vissa att dataList är en variabel till number
	// alltås dataList är en aray av number
	const dataList: Song[] = [
		{ id: 1, artist: 'Dark funeral', title: 'ing Antichrist'},
		{ id: 2, artist: 'Necrophobic', title: 'Nail The Holy One'},
		{ id: 3, artist: 'Unanimated', title: 'Dead Calm'},
		{ id: 4, artist: 'Entombed', title: 'Morbid Devourment'}



	]

	// useState för att komma ihåg(spara kan man säga ) 
	// så när man trycker på en låt så ska datan komma ihåg och kunna plocka ut låten 
	const [selectedId, setSelectedId] = useState(-666)

	let selectedSong = dataList.find(song => song.id === selectedId)
	let selectedMessage = 'No song selected';
	if( selectedSong ) {
		selectedMessage = 'You selected ' + selectedSong.title + '.'
	}

	// göra om song till jsx istället för rå data
	// omvandlar alltså data till jsx
	const renderList = dataList.map(song => (
		<li key={song.id}
		onClick={() => setSelectedId(song.id)}
		className={song.id === selectedId ? 'selected' : ''}>
			{song.artist} - {song.title}
		</li>
	)) 


// {selectedId} är state variabeln 

  	return (
    <main className="App">
		<h1>Face melting metal</h1>
	 	<ul className="song-list">


			{renderList}

	 	</ul>

		 <p>{selectedMessage} </p>

    </main>
  );
}

export default App;
