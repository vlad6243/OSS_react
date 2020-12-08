import React from 'react';
import ReactMarkdown from 'react-markdown';

const getTaskDescriptionRenderer = (source) => () => (
  <ReactMarkdown source={source} />
);

export default getTaskDescriptionRenderer;
