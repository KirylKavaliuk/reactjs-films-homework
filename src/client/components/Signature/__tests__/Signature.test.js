import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Signature from '../Signature';

const renderer = new ShallowRenderer();
renderer.render(<Signature name="Kovalyuk Kirill"/>);
const wrapper = renderer.getRenderOutput();
