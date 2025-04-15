import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SidebarData } from "../core/data/json/sidebarData";
import Scrollbars from "react-custom-scrollbars-2";
import { setExpandMenu } from "../../../core/data/redux/commonSlice";
import { useDispatch, useSelector } from "react-redux";

const AdminSidebar = () => {
  const Location = useLocation();
  const dispatch = useDispatch();
  const miniSidebar = useSelector((state: any) => state.miniSidebar);
  const [subOpen, setSubopen] = useState<any>("");
  const [subsidebar, setSubsidebar] = useState("");

  const toggleSidebar = (title: any) => {
    localStorage.setItem("menuOpened", title);
    if (title === subOpen) {
      setSubopen("");
    } else {
      setSubopen(title);
    }
  };
  const activeRouterPath2 = () => {
    return Location.pathname.includes("settings");
  };
  const toggleSubsidebar = (subitem: any) => {
    if (subitem === subsidebar) {
      setSubsidebar("");
    } else {
      setSubsidebar(subitem);
    }
  };
  const toggle = () => {
    miniSidebar && dispatch(setExpandMenu(true));
  };
  const toggle2 = () => {
    dispatch(setExpandMenu(false));
  };
  useEffect(() => {
    setSubopen(localStorage.getItem("menuOpened"));
    // Select all 'submenu' elements
    const submenus = document.querySelectorAll(".submenu");
    // Loop through each 'submenu'
    submenus.forEach((submenu) => {
      // Find all 'li' elements within the 'submenu'
      const listItems = submenu.querySelectorAll("li");
      submenu.classList.remove("active");
      // Check if any 'li' has the 'active' class
      listItems.forEach((item) => {
        if (item.classList.contains("active")) {
          // Add 'active' class to the 'submenu'
          submenu.classList.add("active");
          return;
        }
      });
    });
  }, [Location.pathname]);
  return (
    <>
      {/* Sidebar */}
      <div
        className="sidebar"
        id="sidebar"
        onMouseEnter={toggle}
        onMouseLeave={toggle2}
      >
        <Scrollbars>
          <div className="sidebar-inner slimscroll">
            <div id="sidebar-menu" className="sidebar-menu d-flex flex-column">
              <ul className="menu-top">
                {SidebarData?.map((mainLabel, index) => (
                  <React.Fragment key={index}>
                    {" "}
                    {/* Assign a key to the Fragment */}
                    {mainLabel?.label === "UI Interface" && (
                      <li key={`header-${index}`}>
                        {" "}
                        {/* Key for the header */}
                        <h6 className="submenu-hdr">
                          <span>{mainLabel?.label}</span>
                        </h6>
                      </li>
                    )}
                    {mainLabel?.submenuItems?.map((title: any, i) => {
                      let link_array: any = [];
                      if ("submenuItems" in title) {
                        title.submenuItems?.forEach((link: any) => {
                          link_array.push(link?.link);
                          if (link?.submenu && "submenuItems" in link) {
                            link.submenuItems?.forEach((item: any) => {
                              link_array.push(item?.link);
                            });
                          }
                        });
                      }
                      title.links = link_array;

                      return (
                        <li
                          className={`${title?.submenu ? "submenu" : ""} ${
                            title?.submenuItems
                              ?.map((link: any) => link?.link)
                              .includes(Location.pathname) ||
                            title?.link === Location.pathname
                              ? "active"
                              : title?.subLink1 === Location.pathname
                                ? "active"
                                : title?.subLink2 === Location.pathname
                                  ? "active"
                                  : title?.subLink3 === Location.pathname
                                    ? "active"
                                    : title?.subLink4 === Location.pathname
                                      ? "active"
                                      : activeRouterPath2() &&
                                          title?.label === "Settings"
                                        ? "active"
                                        : ""
                          } `}
                          key={`title-${i}`}
                        >
                          <Link
                            to={title?.submenu ? "#" : title?.link}
                            onClick={() => toggleSidebar(title?.label)}
                            className={`${
                              subOpen === title?.label ? "subdrop" : ""
                            } ${
                              title?.links?.includes(Location.pathname)
                                ? "active"
                                : ""
                            } `}
                          >
                            <i className={title.icon}></i>
                            <span>{title?.label}</span>
                            {title?.vshow && (
                              <span className="version">{title?.version}</span>
                            )}
                            <span
                              className={title?.submenu ? "menu-arrow" : ""}
                            />
                          </Link>
                          {title?.submenu && (
                            <ul
                              style={{
                                display:
                                  subOpen === title?.label ? "block" : "none",
                              }}
                            >
                              {title?.submenuItems?.map((item: any, j: any) => (
                                <li
                                  className={`${item?.submenu ? "submenu" : ""} ${
                                    item?.submenu2 ? "submenu-two" : ""
                                  }`}
                                  key={`submenu-${j}`}
                                >
                                  <Link
                                    to={item?.link}
                                    className={`${
                                      item?.submenuItems
                                        ?.map((link: any) => link?.link)
                                        .includes(Location.pathname) ||
                                      item?.link === Location.pathname
                                        ? "active "
                                        : ""
                                    } ${
                                      item?.submenuItems
                                        ?.map((link: any) => link?.link)
                                        .includes(Location.pathname) &&
                                      item?.submenu2
                                        ? "subdrop "
                                        : ""
                                    } `}
                                    onClick={() => {
                                      toggleSubsidebar(item?.label);
                                    }}
                                  >
                                    {!item?.submenu && (
                                      <i className="ti ti-point-filled me-2"></i>
                                    )}
                                    {item?.label}
                                    <span
                                      className={
                                        item?.submenu ? "menu-arrow" : ""
                                      }
                                    />
                                  </Link>
                                  {item?.submenu && (
                                    <ul
                                      style={{
                                        display:
                                          subsidebar === item?.label
                                            ? "block"
                                            : "none",
                                      }}
                                    >
                                      {item?.submenuItems?.map(
                                        (items: any, k: any) => (
                                          <li key={`submenu-item-${k}`}>
                                            {" "}
                                            {/* Unique key for submenu item */}
                                            <Link
                                              to={items?.link}
                                              className={`${
                                                subsidebar === items?.label
                                                  ? "submenu-two subdrop"
                                                  : "submenu-two"
                                              } ${
                                                items?.submenuItems
                                                  ?.map(
                                                    (link: any) => link.link,
                                                  )
                                                  .includes(
                                                    Location.pathname,
                                                  ) ||
                                                items?.link ===
                                                  Location.pathname
                                                  ? "active"
                                                  : ""
                                              }`}
                                            >
                                              {items?.label}
                                            </Link>
                                          </li>
                                        ),
                                      )}
                                    </ul>
                                  )}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </React.Fragment>
                ))}
              </ul>
            </div>
          </div>
        </Scrollbars>
      </div>
      {/* /Sidebar */}
    </>
  );
};

export default AdminSidebar;
