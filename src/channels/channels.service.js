import { createContext, useContext, useEffect, useState } from 'react';
import { axios } from '../remote';

export const ChannelsContext = createContext([[], null, null]);

export function useFetchChannels() {
	const [channels, setChannels] = useState([]);

	useEffect(() => {
		axios.get('fetch-channels').then((res) => {
			if (res.status === 200) {
				setChannels(res.data);
			}
		});
	}, []);

	return [channels, setChannels];
}

export function useChannels() {
	return useContext(ChannelsContext);
}

export function useFindChannelById(channelId) {
	const [channels] = useChannels();

	if (channelId === null) {
		return channels[0];
	}

	const found = channels.find(c => c.id === channelId);
	return found || {};
}

export function useUpdateChannels() {
	const [,setChannels] = useChannels();
	return setChannels;
}