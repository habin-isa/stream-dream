import React from 'react';
import { render } from '@testing-library/react';
import PageVideoList from '.';

describe('PageVideoList', () => {
    it('should render', () => {
        const { container } = render(<PageVideoList />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
