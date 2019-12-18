import React from 'react';
import { render } from '@testing-library/react';
import PageTitle from '.';

describe('PageTitle', () => {
    it('should render', () => {
        const { container } = render(<PageTitle />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
