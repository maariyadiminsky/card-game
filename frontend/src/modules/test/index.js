/* eslint react/prop-types: 0 */

import { render } from '@testing-library/react';
import React from 'react';

import '@testing-library/jest-dom';

// note: add any future providers here
const Providers = ({ children }) => <>{children}</>;

const customRender = (ui, options = null) => render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
