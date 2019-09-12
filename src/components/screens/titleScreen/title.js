import React from 'react';
import classnames from 'classnames';

const titleLetters = 'Hangman'.split('');

function renderLetter(letter) {
    const cssClasses = `title__letter title__letter--${letter.toLowerCase()}`;

    return (
        <span className="title__letter-wrap">
			<span className={cssClasses}>{letter}</span>
		</span>
    );
}

function Title({withIntro=false}) {
    const cssClasses = classnames('title', {
        'title--with-intro': withIntro
    });

    return (
        <h1 class={cssClasses}>
            {
                titleLetters.map(renderLetter)
            }
		</h1>
    );
}

export default Title;