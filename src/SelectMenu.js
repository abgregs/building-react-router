import React, { Fragment } from "react";
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

import App1 from "./complete/App-1";
import App2 from "./complete/App-2";
import App3 from "./complete/App-3";
import App4 from "./complete/App-4";
import App5 from "./complete/App-5";
import App6 from "./complete/App-6";
import App7 from "./complete/App-7";
import Complete from "./complete/Complete";

const components = {
  "Step 1": <App1 />,
  "Step 2": <App2 />,
  "Step 3": <App3 />,
  "Step 4": <App4 />,
  "Step 5": <App5 />,
  "Step 6": <App6 />,
  "Step 7": <App7 />,
  "Complete": <Complete />,
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

class SelectMenu extends React.Component {
  render() {
    const menuItems = Object.keys(components).map((key, i) => (
      <MenuItem
        key={key}
        name={key}
        to={components[key]}
        handleNavigate={this.props.handleNavigate}
        active={this.props.activeComponent === components[key]}
      >
        {key}
      </MenuItem>
    ));
    return (
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-slate-600">
            Steps
            <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {menuItems}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    )
  }
}


class MenuItem extends React.Component {
  render() {
    return (
      <Menu.Item>
      <a
      onClick={(e) => {
        e.preventDefault();
        this.props.handleNavigate(this.props.to);
      }}
      href="#"
      className={classNames(
        this.props.active ? 'bg-gray-100 text-gray-900 active' : 'text-gray-700',
        'block px-4 py-2 text-sm'
      )}
    >
      {this.props.name}
    </a>
    </Menu.Item>
    )
  }
}

export default SelectMenu;
