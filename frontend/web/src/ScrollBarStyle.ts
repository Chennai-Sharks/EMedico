export const scrollBarStyle = () => ({
	'@global': {
		'*::-webkit-scrollbar': {
			width: '10px',
			'background-color': 'black',
		},
		'*::-webkit-scrollbar-track': {
			' -webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.3)',
			'background-color': ' #F5F5F5',
			'border-radius': '10px',
		},
		'*::-webkit-scrollbar-thumb': {
			'border-radius': '10px',
			'background-color': 'black',
			// 	'background-image':
			// 		'-webkit-gradient(linear,left bottom,left top,color-stop(0.44, rgb(122,153,217)),color-stop(0.72, rgb(73,125,189)),color-stop(0.86, rgb(28,58,148)))',
			//
		},
	},
});
