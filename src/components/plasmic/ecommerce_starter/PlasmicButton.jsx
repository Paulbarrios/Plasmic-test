// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: a87zscS5zAyxUWqfaRXyok
// Component: SpLhEqEri3lkmA
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_ecommerce_starter.module.css"; // plasmic-import: a87zscS5zAyxUWqfaRXyok/projectcss
import * as sty from "./PlasmicButton.module.css"; // plasmic-import: SpLhEqEri3lkmA/css
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: vVxNN2JG4ShtEc/icon

export const PlasmicButton__VariantProps = new Array(
  "icons",
  "colors",
  "size",
  "rounded",
  "link",
  "states"
);

export const PlasmicButton__ArgProps = new Array(
  "children",
  "slot",
  "children2",
  "children3",
  "children32",
  "children322",
  "children3222",
  "link2"
);

function PlasmicButton__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <p.Stack
      as={"a"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__colors_black]: hasVariant(variants, "colors", "black"),
        [sty.root__colors_blue]: hasVariant(variants, "colors", "blue"),
        [sty.root__colors_gray]: hasVariant(variants, "colors", "gray"),
        [sty.root__colors_lightGrayOutline]: hasVariant(
          variants,
          "colors",
          "lightGrayOutline"
        ),

        [sty.root__colors_lightGray]: hasVariant(
          variants,
          "colors",
          "lightGray"
        ),

        [sty.root__colors_white]: hasVariant(variants, "colors", "white"),
        [sty.root__icons_end]: hasVariant(variants, "icons", "end"),
        [sty.root__icons_five]: hasVariant(variants, "icons", "five"),
        [sty.root__icons_none]: hasVariant(variants, "icons", "none"),
        [sty.root__link]: hasVariant(variants, "link", "link"),
        [sty.root__rounded]: hasVariant(variants, "rounded", "rounded"),
        [sty.root__rounded_size_large]:
          hasVariant(variants, "rounded", "rounded") &&
          hasVariant(variants, "size", "large"),
        [sty.root__size_large]: hasVariant(variants, "size", "large"),
        [sty.root__size_narrow]: hasVariant(variants, "size", "narrow"),
        [sty.root__size_small]: hasVariant(variants, "size", "small"),
        [sty.root__states_active]: hasVariant(variants, "states", "active")
      })}
      href={args.link2}
    >
      {(
        hasVariant(variants, "icons", "end")
          ? false
          : hasVariant(variants, "icons", "none")
          ? false
          : true
      ) ? (
        <div
          className={classNames(defaultcss.all, sty.box__he3PI, {
            [sty.box__icons_end__he3PIIMzn]: hasVariant(
              variants,
              "icons",
              "end"
            ),

            [sty.box__icons_five__he3PImRv0K]: hasVariant(
              variants,
              "icons",
              "five"
            ),

            [sty.box__icons_none__he3PIcXmI8]: hasVariant(
              variants,
              "icons",
              "none"
            ),

            [sty.box__size_large__he3PIKh0ZO]: hasVariant(
              variants,
              "size",
              "large"
            ),

            [sty.box__size_small__he3PIefY94]: hasVariant(
              variants,
              "size",
              "small"
            )
          })}
        >
          {(
            hasVariant(variants, "icons", "end")
              ? true
              : hasVariant(variants, "icons", "none")
              ? true
              : true
          )
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <IconIcon
                    className={classNames(defaultcss.all, sty.svg__kVp)}
                    role={"img"}
                  />
                ),

                value: args.children,
                className: classNames(sty.slotChildren, {
                  [sty.slotChildren__colors_black]: hasVariant(
                    variants,
                    "colors",
                    "black"
                  ),

                  [sty.slotChildren__colors_blue]: hasVariant(
                    variants,
                    "colors",
                    "blue"
                  ),

                  [sty.slotChildren__colors_gray]: hasVariant(
                    variants,
                    "colors",
                    "gray"
                  ),

                  [sty.slotChildren__icons_end]: hasVariant(
                    variants,
                    "icons",
                    "end"
                  ),

                  [sty.slotChildren__icons_five]: hasVariant(
                    variants,
                    "icons",
                    "five"
                  ),

                  [sty.slotChildren__icons_none]: hasVariant(
                    variants,
                    "icons",
                    "none"
                  ),

                  [sty.slotChildren__size_large]: hasVariant(
                    variants,
                    "size",
                    "large"
                  ),

                  [sty.slotChildren__size_small]: hasVariant(
                    variants,
                    "size",
                    "small"
                  )
                })
              })
            : null}
        </div>
      ) : null}
      {(
        hasVariant(variants, "icons", "five")
          ? true
          : hasVariant(variants, "icons", "end")
          ? false
          : hasVariant(variants, "icons", "none")
          ? false
          : false
      ) ? (
        <div
          className={classNames(defaultcss.all, sty.box__aWmHz, {
            [sty.box__icons_end__aWmHzIMzn]: hasVariant(
              variants,
              "icons",
              "end"
            ),

            [sty.box__icons_five__aWmHZmRv0K]: hasVariant(
              variants,
              "icons",
              "five"
            ),

            [sty.box__icons_none__aWmHZcXmI8]: hasVariant(
              variants,
              "icons",
              "none"
            ),

            [sty.box__size_large__aWmHzKh0ZO]: hasVariant(
              variants,
              "size",
              "large"
            ),

            [sty.box__size_small__aWmHZefY94]: hasVariant(
              variants,
              "size",
              "small"
            )
          })}
        >
          {(
            hasVariant(variants, "icons", "end")
              ? true
              : hasVariant(variants, "icons", "none")
              ? true
              : true
          )
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <IconIcon
                    className={classNames(defaultcss.all, sty.svg__wj5E)}
                    role={"img"}
                  />
                ),

                value: args.children3,
                className: classNames(sty.slotChildren3, {
                  [sty.slotChildren3__colors_black]: hasVariant(
                    variants,
                    "colors",
                    "black"
                  ),

                  [sty.slotChildren3__colors_blue]: hasVariant(
                    variants,
                    "colors",
                    "blue"
                  ),

                  [sty.slotChildren3__colors_gray]: hasVariant(
                    variants,
                    "colors",
                    "gray"
                  ),

                  [sty.slotChildren3__icons_end]: hasVariant(
                    variants,
                    "icons",
                    "end"
                  ),

                  [sty.slotChildren3__icons_none]: hasVariant(
                    variants,
                    "icons",
                    "none"
                  ),

                  [sty.slotChildren3__size_large]: hasVariant(
                    variants,
                    "size",
                    "large"
                  ),

                  [sty.slotChildren3__size_small]: hasVariant(
                    variants,
                    "size",
                    "small"
                  )
                })
              })
            : null}
        </div>
      ) : null}
      {(
        hasVariant(variants, "icons", "five")
          ? true
          : hasVariant(variants, "icons", "end")
          ? false
          : hasVariant(variants, "icons", "none")
          ? false
          : false
      ) ? (
        <div
          className={classNames(defaultcss.all, sty.box__ympcO, {
            [sty.box__icons_end__ympcOIMzn]: hasVariant(
              variants,
              "icons",
              "end"
            ),

            [sty.box__icons_five__ympcOmRv0K]: hasVariant(
              variants,
              "icons",
              "five"
            ),

            [sty.box__icons_none__ympcOcXmI8]: hasVariant(
              variants,
              "icons",
              "none"
            ),

            [sty.box__size_large__ympcOKh0ZO]: hasVariant(
              variants,
              "size",
              "large"
            ),

            [sty.box__size_small__ympcOefY94]: hasVariant(
              variants,
              "size",
              "small"
            )
          })}
        >
          {(
            hasVariant(variants, "icons", "end")
              ? true
              : hasVariant(variants, "icons", "none")
              ? true
              : true
          )
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <IconIcon
                    className={classNames(defaultcss.all, sty.svg___7Qgl6)}
                    role={"img"}
                  />
                ),

                value: args.children32,
                className: classNames(sty.slotChildren32, {
                  [sty.slotChildren32__colors_black]: hasVariant(
                    variants,
                    "colors",
                    "black"
                  ),

                  [sty.slotChildren32__colors_blue]: hasVariant(
                    variants,
                    "colors",
                    "blue"
                  ),

                  [sty.slotChildren32__colors_gray]: hasVariant(
                    variants,
                    "colors",
                    "gray"
                  ),

                  [sty.slotChildren32__icons_end]: hasVariant(
                    variants,
                    "icons",
                    "end"
                  ),

                  [sty.slotChildren32__icons_none]: hasVariant(
                    variants,
                    "icons",
                    "none"
                  ),

                  [sty.slotChildren32__size_large]: hasVariant(
                    variants,
                    "size",
                    "large"
                  ),

                  [sty.slotChildren32__size_small]: hasVariant(
                    variants,
                    "size",
                    "small"
                  )
                })
              })
            : null}
        </div>
      ) : null}
      {(
        hasVariant(variants, "icons", "five")
          ? true
          : hasVariant(variants, "icons", "end")
          ? false
          : hasVariant(variants, "icons", "none")
          ? false
          : false
      ) ? (
        <div
          className={classNames(defaultcss.all, sty.box__foWjr, {
            [sty.box__icons_end__foWjrIMzn]: hasVariant(
              variants,
              "icons",
              "end"
            ),

            [sty.box__icons_five__foWjRmRv0K]: hasVariant(
              variants,
              "icons",
              "five"
            ),

            [sty.box__icons_none__foWjRcXmI8]: hasVariant(
              variants,
              "icons",
              "none"
            ),

            [sty.box__size_large__foWjrKh0ZO]: hasVariant(
              variants,
              "size",
              "large"
            ),

            [sty.box__size_small__foWjRefY94]: hasVariant(
              variants,
              "size",
              "small"
            )
          })}
        >
          {(
            hasVariant(variants, "icons", "end")
              ? true
              : hasVariant(variants, "icons", "none")
              ? true
              : true
          )
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <IconIcon
                    className={classNames(defaultcss.all, sty.svg__yUfx)}
                    role={"img"}
                  />
                ),

                value: args.children322,
                className: classNames(sty.slotChildren322, {
                  [sty.slotChildren322__colors_black]: hasVariant(
                    variants,
                    "colors",
                    "black"
                  ),

                  [sty.slotChildren322__colors_blue]: hasVariant(
                    variants,
                    "colors",
                    "blue"
                  ),

                  [sty.slotChildren322__colors_gray]: hasVariant(
                    variants,
                    "colors",
                    "gray"
                  ),

                  [sty.slotChildren322__icons_end]: hasVariant(
                    variants,
                    "icons",
                    "end"
                  ),

                  [sty.slotChildren322__icons_none]: hasVariant(
                    variants,
                    "icons",
                    "none"
                  ),

                  [sty.slotChildren322__size_large]: hasVariant(
                    variants,
                    "size",
                    "large"
                  ),

                  [sty.slotChildren322__size_small]: hasVariant(
                    variants,
                    "size",
                    "small"
                  )
                })
              })
            : null}
        </div>
      ) : null}
      {(
        hasVariant(variants, "icons", "five")
          ? true
          : hasVariant(variants, "icons", "end")
          ? false
          : hasVariant(variants, "icons", "none")
          ? false
          : false
      ) ? (
        <div
          className={classNames(defaultcss.all, sty.box__xEV9, {
            [sty.box__icons_end__xEV9IMzn]: hasVariant(
              variants,
              "icons",
              "end"
            ),

            [sty.box__icons_five__xEV9MRv0K]: hasVariant(
              variants,
              "icons",
              "five"
            ),

            [sty.box__icons_none__xEV9CXmI8]: hasVariant(
              variants,
              "icons",
              "none"
            ),

            [sty.box__size_large__xEV9Kh0ZO]: hasVariant(
              variants,
              "size",
              "large"
            ),

            [sty.box__size_small__xEV9EfY94]: hasVariant(
              variants,
              "size",
              "small"
            )
          })}
        >
          {(
            hasVariant(variants, "icons", "end")
              ? true
              : hasVariant(variants, "icons", "none")
              ? true
              : true
          )
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <IconIcon
                    className={classNames(defaultcss.all, sty.svg__muspD)}
                    role={"img"}
                  />
                ),

                value: args.children3222,
                className: classNames(sty.slotChildren3222, {
                  [sty.slotChildren3222__colors_black]: hasVariant(
                    variants,
                    "colors",
                    "black"
                  ),

                  [sty.slotChildren3222__colors_blue]: hasVariant(
                    variants,
                    "colors",
                    "blue"
                  ),

                  [sty.slotChildren3222__colors_gray]: hasVariant(
                    variants,
                    "colors",
                    "gray"
                  ),

                  [sty.slotChildren3222__icons_end]: hasVariant(
                    variants,
                    "icons",
                    "end"
                  ),

                  [sty.slotChildren3222__icons_none]: hasVariant(
                    variants,
                    "icons",
                    "none"
                  ),

                  [sty.slotChildren3222__size_large]: hasVariant(
                    variants,
                    "size",
                    "large"
                  ),

                  [sty.slotChildren3222__size_small]: hasVariant(
                    variants,
                    "size",
                    "small"
                  )
                })
              })
            : null}
        </div>
      ) : null}
      {(
        hasVariant(variants, "icons", "five")
          ? false
          : hasVariant(variants, "icons", "only")
          ? false
          : true
      )
        ? p.renderPlasmicSlot({
            defaultContents: "Enter some text",
            value: args.slot,
            className: classNames(sty.slotSlot, {
              [sty.slotSlot__colors_black]: hasVariant(
                variants,
                "colors",
                "black"
              ),

              [sty.slotSlot__colors_blue]: hasVariant(
                variants,
                "colors",
                "blue"
              ),

              [sty.slotSlot__colors_gray]: hasVariant(
                variants,
                "colors",
                "gray"
              ),

              [sty.slotSlot__icons_both]: hasVariant(variants, "icons", "both"),
              [sty.slotSlot__icons_end]: hasVariant(variants, "icons", "end"),
              [sty.slotSlot__icons_five]: hasVariant(variants, "icons", "five"),
              [sty.slotSlot__icons_only]: hasVariant(variants, "icons", "only"),
              [sty.slotSlot__link]: hasVariant(variants, "link", "link"),
              [sty.slotSlot__size_large]: hasVariant(variants, "size", "large"),
              [sty.slotSlot__size_small]: hasVariant(variants, "size", "small")
            })
          })
        : null}
      {(
        hasVariant(variants, "icons", "both")
          ? true
          : hasVariant(variants, "icons", "end")
          ? true
          : false
      ) ? (
        <div
          className={classNames(defaultcss.all, sty.box__lfmhX, {
            [sty.box__icons_both__lfmhXOla5L]: hasVariant(
              variants,
              "icons",
              "both"
            ),

            [sty.box__icons_end__lfmhXIMzn]: hasVariant(
              variants,
              "icons",
              "end"
            ),

            [sty.box__icons_five__lfmhXmRv0K]: hasVariant(
              variants,
              "icons",
              "five"
            ),

            [sty.box__size_small__lfmhXefY94]: hasVariant(
              variants,
              "size",
              "small"
            )
          })}
        >
          {(
            hasVariant(variants, "icons", "both")
              ? true
              : hasVariant(variants, "icons", "end")
              ? true
              : hasVariant(variants, "icons", "none")
              ? false
              : false
          )
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <IconIcon
                    className={classNames(defaultcss.all, sty.svg__dPbJt)}
                    role={"img"}
                  />
                ),

                value: args.children2,
                className: classNames(sty.slotChildren2, {
                  [sty.slotChildren2__colors_black]: hasVariant(
                    variants,
                    "colors",
                    "black"
                  ),

                  [sty.slotChildren2__icons_both]: hasVariant(
                    variants,
                    "icons",
                    "both"
                  ),

                  [sty.slotChildren2__icons_end]: hasVariant(
                    variants,
                    "icons",
                    "end"
                  ),

                  [sty.slotChildren2__icons_none]: hasVariant(
                    variants,
                    "icons",
                    "none"
                  ),

                  [sty.slotChildren2__link]: hasVariant(
                    variants,
                    "link",
                    "link"
                  )
                })
              })
            : null}
        </div>
      ) : null}
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicButton__ArgProps,
      internalVariantPropNames: PlasmicButton__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicButton__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButton";
  } else {
    func.displayName = `PlasmicButton.${nodeName}`;
  }
  return func;
}

export const PlasmicButton = Object.assign(
  // Top-level PlasmicButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicButton
    internalVariantProps: PlasmicButton__VariantProps,
    internalArgProps: PlasmicButton__ArgProps
  }
);

export default PlasmicButton;
/* prettier-ignore-end */
