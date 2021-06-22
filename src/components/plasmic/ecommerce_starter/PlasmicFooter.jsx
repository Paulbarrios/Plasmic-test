// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: a87zscS5zAyxUWqfaRXyok
// Component: BJB9TNf3xCMxyU
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: SpLhEqEri3lkmA/component
import CopyrightSocialLanguage from "../../CopyrightSocialLanguage"; // plasmic-import: EjS9V_FZoapGJC/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: t4DeUfbUb9lt6-/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_ecommerce_starter.module.css"; // plasmic-import: a87zscS5zAyxUWqfaRXyok/projectcss
import * as sty from "./PlasmicFooter.module.css"; // plasmic-import: BJB9TNf3xCMxyU/css
import Icon22Icon from "./icons/PlasmicIcon__Icon22"; // plasmic-import: 42A6AiDsLrw6Xb/icon
import Icon21Icon from "./icons/PlasmicIcon__Icon21"; // plasmic-import: X42BYSFS5AGQRe/icon
import Icon20Icon from "./icons/PlasmicIcon__Icon20"; // plasmic-import: BzKeHVANHFAxLc/icon

export const PlasmicFooter__VariantProps = new Array();

export const PlasmicFooter__ArgProps = new Array("container432");

function PlasmicFooter__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <section
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"container432"}
        data-plasmic-override={overrides.container432}
        hasGap={true}
        className={classNames(defaultcss.all, sty.container432)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.box__z4Kuu)}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__rr3Lz
                  )}
                >
                  {"Subscribe"}
                </div>

                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__iDlD0
                  )}
                >
                  {
                    "Sign up for exclusive offers, original stories, activism, events and more."
                  }
                </div>

                <input
                  className={classNames(defaultcss.input, sty.textbox__mNzQx)}
                  placeholder={"Email address…"}
                  size={1}
                  type={"text"}
                  value={""}
                />

                <Button
                  className={classNames("__wab_instance", sty.button__tBwn2)}
                  colors={"black"}
                  icons={"none"}
                  slot={"Sign me up"}
                />
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.box__psSt)}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__oaiRp
                  )}
                >
                  {"Help"}
                </div>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.box___2Sjfv)}
                >
                  <Button slot={"Order status"}>
                    <Icon22Icon
                      className={classNames(defaultcss.all, sty.svg__gPeFl)}
                      role={"img"}
                    />
                  </Button>

                  <Button
                    className={classNames("__wab_instance", sty.button__xzta)}
                    slot={
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.box__joVs
                        )}
                      >
                        {"Returns and exchanges"}
                      </div>
                    }
                  >
                    <Icon21Icon
                      className={classNames(defaultcss.all, sty.svg__t6WmY)}
                      role={"img"}
                    />
                  </Button>

                  <Button
                    className={classNames("__wab_instance", sty.button__iAlGa)}
                    slot={
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.box__liNfb
                        )}
                      >
                        {"Help center"}
                      </div>
                    }
                  >
                    <Icon20Icon
                      className={classNames(defaultcss.all, sty.svg__ywSHs)}
                      role={"img"}
                    />
                  </Button>
                </p.Stack>
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.box__xPzCl)}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__fwOh
                  )}
                >
                  {"More info"}
                </div>

                <div className={classNames(defaultcss.all, sty.box___261Gu)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(defaultcss.all, sty.box__qw4ZV)}
                  >
                    <Button icons={"none"} slot={"Gift cards"} />

                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__ewY6O
                      )}
                      icons={"none"}
                      slot={"Find a store"}
                    />

                    <Button
                      className={classNames("__wab_instance", sty.button__kFiB)}
                      icons={"none"}
                      slot={"Careers"}
                    />

                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button___9BiH0
                      )}
                      icons={"none"}
                      slot={"Sitemap"}
                    />
                  </p.Stack>

                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(defaultcss.all, sty.box__ctRjY)}
                  >
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__d1Kjx
                      )}
                      icons={"none"}
                      slot={"Group sales"}
                    />

                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__sJp6I
                      )}
                      icons={"none"}
                      slot={"Privacy policy"}
                    />

                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__zMIko
                      )}
                      icons={"none"}
                      slot={"Contact us"}
                    />
                  </p.Stack>
                </div>
              </p.Stack>
            </React.Fragment>
          ),

          value: args.container432
        })}
      </p.Stack>

      <CopyrightSocialLanguage
        data-plasmic-name={"copyrightSocialLanguage"}
        data-plasmic-override={overrides.copyrightSocialLanguage}
        className={classNames("__wab_instance", sty.copyrightSocialLanguage)}
      />
    </section>
  );
}

const PlasmicDescendants = {
  root: ["root", "container432", "copyrightSocialLanguage"],
  container432: ["container432"],
  copyrightSocialLanguage: ["copyrightSocialLanguage"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFooter__ArgProps,
      internalVariantPropNames: PlasmicFooter__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    container432: makeNodeComponent("container432"),
    copyrightSocialLanguage: makeNodeComponent("copyrightSocialLanguage"),
    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */
