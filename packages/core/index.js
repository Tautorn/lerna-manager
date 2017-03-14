'use strict';

console.info('Init... Core v.0.x.x')

const _container = require('./components/container')
const _navBar = require('./components/nav-bar')
const _tooltip = require('./components/tooltip')

exports._container = _container.containerPlugin;

exports._navBar = _navBar.navBarPlugin;

exports._tooltip = _tooltip.tooltipPlugin;

console.log('\nExporting...')

