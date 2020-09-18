import React, { useState } from 'react';
import ReactJson from 'react-json-view';
import { useFindChannelById } from '../channels/channels.service';
import { ChannelPicker } from './channel-picker';

export function Dashboard() {
	const [filteredId, setFilteredId] = useState(null);

	const activeChannel = useFindChannelById(filteredId);

	const handleNewChannel = channelId => {
		setFilteredId(channelId);
	}

	return (
		<div>
			<ChannelPicker onChannelPick={handleNewChannel}/>
			<ReactJson src={activeChannel}/>
		</div>
	);
}