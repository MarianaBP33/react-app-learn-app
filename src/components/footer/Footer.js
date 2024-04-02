import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";

const Footer = () => {
	return (
		<footer className="bg-gray-100 text-gray-500 py-4">
  <div className="container mx-auto px-4">
    <div className="flex flex-col items-center sm:flex-row sm:justify-between">
      <div className="mb-4 sm:mb-0">
        <img src="/images/learn-logo.jpg" alt="Logo" className="h-8" />
      </div>
      <ItemsContainer />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8">
			<select>
				<option>English</option>
				<option>Spanish</option>
			</select>
      <div className="flex items-center justify-center sm:justify-start">
        <span className="flex items-center space-x-3">
          <span>© 2024 Learn, Inc.</span>
          <span className="border-l border-gray-300 h-4"></span>
          <span>Privacy</span>
          <span className="border-l border-gray-300 h-4"></span>
          <span>Terms</span>
        </span>
      </div>
      <SocialIcons Icons={Icons} />
    </div>
  </div>
</footer>

    )
}

export default Footer;