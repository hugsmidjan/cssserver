import eventify from '@hugsmidjan_is/qj/eventify';

const { on, emit } = eventify({});

export const onCacheRefresh = (callback: () => void) => {
	on('refresh', callback);
};
export const refreshCache = () => {
	emit('refresh');
};
