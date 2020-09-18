import React, { useState } from 'react';
import { ChannelsContext, useFetchChannels } from './channels/channels.service';
import { Dashboard } from './components/dashboard';

function App() {
	const [channels, setChannels] = useFetchChannels();

	return (
		<ChannelsContext.Provider value={[channels, setChannels]}>
			<main style={{ margin: '2rem auto' }}>
				<Dashboard/>
			</main>
		</ChannelsContext.Provider>
	)
}

export default App;
