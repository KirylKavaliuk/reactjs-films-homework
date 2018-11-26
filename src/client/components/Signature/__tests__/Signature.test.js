import React from 'react';
import Signature from '../Signature';
import ShallowRenderer from 'react-test-renderer/shallow';

const renderer = new ShallowRenderer();
renderer.render(<Signature name="Kovalyuk Kirill"/>);
const wrapper = renderer.getRenderOutput();

expect(wrapper.type).toBe('div');