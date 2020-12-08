import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Footer } from './styled';

const Index = ({ children }) => (
  <Container role="main">
    <nav key="nav">
      <Link to="/">Content</Link>
    </nav>
    {children}
    <Footer>React Courses, {new Date().getFullYear()}</Footer>
  </Container>
);

Index.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Index;
