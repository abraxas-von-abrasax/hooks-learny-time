import React from 'react';
import { useChannels } from '../channels/channels.service';

export function ChannelPicker({ onChannelPick }) {
	const channels = useChannels();

	const getChannelOptions = () => {
		return channels.map(channel => {
			return <option
				key={channel.id}
				value={channel.id}
				defaultValue={channels[0]}>{channel.name}
			</option>
		});
	};

	return (
		<select name="channels" id="channels" onChange={event => onChannelPick(event.target.value)}>
			{getChannelOptions()}
		</select>
	);
}