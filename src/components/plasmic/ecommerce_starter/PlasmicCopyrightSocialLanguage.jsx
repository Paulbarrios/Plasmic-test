// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: a87zscS5zAyxUWqfaRXyok
// Component: EjS9V_FZoapGJC
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: SpLhEqEri3lkmA/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_ecommerce_starter.module.css"; // plasmic-import: a87zscS5zAyxUWqfaRXyok/projectcss
import * as sty from "./PlasmicCopyrightSocialLanguage.module.css"; // plasmic-import: EjS9V_FZoapGJC/css
import Icon27Icon from "./icons/PlasmicIcon__Icon27"; // plasmic-import: zxU2fHYe9Y4v-K/icon
import Icon28Icon from "./icons/PlasmicIcon__Icon28"; // plasmic-import: tiitdqbF3Q4RVt/icon
import Icon29Icon from "./icons/PlasmicIcon__Icon29"; // plasmic-import: GXRrI5DFVYm_ph/icon
import Icon15Icon from "./icons/PlasmicIcon__Icon15"; // plasmic-import: kCuUutZBWWlIX6/icon

export const PlasmicCopyrightSocialLanguage__VariantProps = new Array();

export const PlasmicCopyrightSocialLanguage__ArgProps = new Array("children");

function PlasmicCopyrightSocialLanguage__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"box"}
        data-plasmic-override={overrides.box}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.box__jv2Xg)}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__alTn8
                  )}
                >
                  {"?? 2021 ShoeShop, Inc. All Rights Reserved."}
                </div>

                <div className={classNames(defaultcss.all, sty.box__zij97)}>
                  <Button icons={"only"} link2={"http://twitter.com"}>
                    <Icon27Icon
                      className={classNames(defaultcss.all, sty.svg__cnax0)}
                      role={"img"}
                    />
                  </Button>

                  <Button
                    className={classNames("__wab_instance", sty.button__ct533)}
                    icons={"only"}
                    link2={"http://youtube.com"}
                  >
                    <Icon28Icon
                      className={classNames(defaultcss.all, sty.svg__wbang)}
                      role={"img"}
                    />
                  </Button>

                  <Button
                    className={classNames("__wab_instance", sty.button__rgmxH)}
                    icons={"only"}
                    link2={"http://pinterest.com"}
                  >
                    <Icon29Icon
                      className={classNames(defaultcss.all, sty.svg__uP4Qs)}
                      role={"img"}
                    />
                  </Button>
                </div>
              </p.Stack>

              <Button
                children2={
                  <Icon15Icon
                    className={classNames(defaultcss.all, sty.svg___0CNP)}
                    role={"img"}
                  />
                }
                className={classNames("__wab_instance", sty.button__xz8SY)}
                icons={"end"}
                slot={"English"}
              >
                <Icon15Icon
                  className={classNames(defaultcss.all, sty.svg__unbVn)}
                  role={"img"}
                />
              </Button>
            </React.Fragment>
          ),

          value: args.children
        })}
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "box"],
  box: ["box"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCopyrightSocialLanguage__ArgProps,
      internalVariantPropNames: PlasmicCopyrightSocialLanguage__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicCopyrightSocialLanguage__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCopyrightSocialLanguage";
  } else {
    func.displayName = `PlasmicCopyrightSocialLanguage.${nodeName}`;
  }
  return func;
}

export const PlasmicCopyrightSocialLanguage = Object.assign(
  // Top-level PlasmicCopyrightSocialLanguage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    box: makeNodeComponent("box"),
    // Metadata about props expected for PlasmicCopyrightSocialLanguage
    internalVariantProps: PlasmicCopyrightSocialLanguage__VariantProps,
    internalArgProps: PlasmicCopyrightSocialLanguage__ArgProps
  }
);

export default PlasmicCopyrightSocialLanguage;
/* prettier-ignore-end */
