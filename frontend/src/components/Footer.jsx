import {Container, Row, Col} from 'react-bootstrap';

import React from 'react';


export const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <footer>
        <Container>
            <Row>
                <Col className='text-center py-3'>
                <p>Pro Shop &copy;{currentYear}
                    </p>
                    </Col>
            </Row>
        </Container>
    </footer>
  )
}
