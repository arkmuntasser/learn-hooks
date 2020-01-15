import React, { useState, useEffect, useCallback } from 'react';

function LearnUseEffectWithCleanup() {
	const [coords, setCoords] = useState({ x: 0, y: 0 });
	const [message, setMessage] = useState('');

	useEffect(() => {
		setMessage(`mouse coordinates = x: ${coords.x}, y: ${coords.y}`);
	}, [coords.x, coords.y])

	// Add an event listener to get the coordinates of the mouse

	return (
		<section>
			<h2>Creating Responsible Side Effects</h2>
			<p>{message}</p>
		</section>
	)
}

export default LearnUseEffectWithCleanup;
