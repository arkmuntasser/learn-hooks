import React, { useState, useEffect } from 'react';

function LearnUseEffect() {
	const [name, setName] = useState('');
	const [message, setMessage] = useState('');

	// when name updates, create a new message that is
	// an empty string when name is empty and
	// `Hello, ${name}` when name is not empty

	return (
		<section>
			<h2>Creating Side Effects</h2>
			<input
				type="text"
				onChange={(e) => setName(e.target.value)}
				value={name}
				placeholder="name"
			/>
			<p>{message}</p>
		</section>
	)
}

export default LearnUseEffect;
