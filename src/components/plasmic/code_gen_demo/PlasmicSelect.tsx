// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: hM9GRXxMGXhTkxrnS16qDc
// Component: Qs8vlWG1HB

import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import DropdownItem from "../../DropdownItem"; // plasmic-import: hK49oB3F3T/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_code_gen_demo.module.css"; // plasmic-import: hM9GRXxMGXhTkxrnS16qDc/projectcss
import sty from "./PlasmicSelect.module.css"; // plasmic-import: Qs8vlWG1HB/css

import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: -Hj638EK3Q/icon

export type PlasmicSelect__VariantMembers = {
  isOpen: "isOpen";
};
export type PlasmicSelect__VariantsArgs = {
  isOpen?: SingleBooleanChoiceArg<"isOpen">;
};
type VariantPropType = keyof PlasmicSelect__VariantsArgs;
export const PlasmicSelect__VariantProps = new Array<VariantPropType>("isOpen");

export type PlasmicSelect__ArgsType = {
  options?: any;
  onOptionsChange?: (val: any) => void;
  value?: string;
  onValueChange?: (val: string) => void;
};
type ArgPropType = keyof PlasmicSelect__ArgsType;
export const PlasmicSelect__ArgProps = new Array<ArgPropType>(
  "options",
  "onOptionsChange",
  "value",
  "onValueChange"
);

export type PlasmicSelect__OverridesType = {
  root?: p.Flex<"div">;
  text?: p.Flex<"div">;
  dropdown?: p.Flex<"div">;
  dropdownItem?: p.Flex<typeof DropdownItem>;
  svg?: p.Flex<"svg">;
};

export interface DefaultSelectProps {
  options?: any;
  onOptionsChange?: (val: any) => void;
  value?: string;
  onValueChange?: (val: string) => void;
  isOpen?: SingleBooleanChoiceArg<"isOpen">;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicSelect__RenderFunc(props: {
  variants: PlasmicSelect__VariantsArgs;
  args: PlasmicSelect__ArgsType;
  overrides: PlasmicSelect__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "isOpen",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isOpen
      },
      {
        path: "options",
        type: "writable",
        variableType: "array",

        valueProp: "options",
        onChangeProp: "onOptionsChange"
      },
      {
        path: "dropdownItem[].value",
        type: "private",
        variableType: "text"
      },
      {
        path: "value",
        type: "writable",
        variableType: "text",

        valueProp: "value",
        onChangeProp: "onValueChange"
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        { [sty.rootisOpen]: hasVariant($state, "isOpen", "isOpen") }
      )}
      onClick={async event => {
        const $steps = {};
        $steps["updateIsOpen"] = true
          ? (() => {
              const actionArgs = {
                vgroup: __wrapUserFunction(
                  {
                    type: "InteractionArgLoc",
                    actionName: "updateVariant",
                    interactionUuid: "rGZciQuOR",
                    componentUuid: "Qs8vlWG1HB",
                    argName: "vgroup"
                  },
                  () => "isOpen"
                ),
                operation: __wrapUserFunction(
                  {
                    type: "InteractionArgLoc",
                    actionName: "updateVariant",
                    interactionUuid: "rGZciQuOR",
                    componentUuid: "Qs8vlWG1HB",
                    argName: "operation"
                  },
                  () => 2
                ),
                value: __wrapUserFunction(
                  {
                    type: "InteractionArgLoc",
                    actionName: "updateVariant",
                    interactionUuid: "rGZciQuOR",
                    componentUuid: "Qs8vlWG1HB",
                    argName: "value"
                  },
                  () => "isOpen"
                )
              };
              return __wrapUserFunction(
                {
                  type: "InteractionLoc",
                  actionName: "updateVariant",
                  interactionUuid: "rGZciQuOR",
                  componentUuid: "Qs8vlWG1HB"
                },
                () =>
                  (({ vgroup, value }) => {
                    const oldValue = p.get($state, vgroup);
                    p.set($state, vgroup, !oldValue);
                    return !oldValue;
                  })?.apply(null, [actionArgs]),
                actionArgs
              );
            })()
          : undefined;
        if (
          typeof $steps["updateIsOpen"] === "object" &&
          typeof $steps["updateIsOpen"].then === "function"
        ) {
          $steps["updateIsOpen"] = await __wrapUserPromise(
            {
              type: "InteractionLoc",
              actionName: "updateVariant",
              interactionUuid: "rGZciQuOR",
              componentUuid: "Qs8vlWG1HB"
            },
            $steps["updateIsOpen"]
          );
        }
      }}
    >
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        {(() => {
          try {
            return $state.value;
          } catch (e) {
            if (e instanceof TypeError) {
              return "Result";
            }
            throw e;
          }
        })()}
      </div>
      {(hasVariant($state, "isOpen", "isOpen") ? true : true) ? (
        <div
          data-plasmic-name={"dropdown"}
          data-plasmic-override={overrides.dropdown}
          className={classNames(projectcss.all, sty.dropdown, {
            [sty.dropdownisOpen]: hasVariant($state, "isOpen", "isOpen")
          })}
        >
          {(
            (() => {
              try {
                return $state.options;
              } catch (e) {
                if (e instanceof TypeError) {
                  return [];
                }
                throw e;
              }
            })() ?? []
          ).map((currentItem, currentIndex) =>
            (() => {
              const child$Props = {
                className: classNames("__wab_instance", sty.dropdownItem),
                isLastOne: currentIndex === $state.options.length - 1,

                key: currentIndex,
                onClick: async () => {
                  const $steps = {};
                  $steps["updateValue"] = true
                    ? (() => {
                        const actionArgs = {
                          variable: __wrapUserFunction(
                            {
                              type: "InteractionArgLoc",
                              actionName: "updateVariable",
                              interactionUuid: "ZjfnUa_j2",
                              componentUuid: "Qs8vlWG1HB",
                              argName: "variable"
                            },
                            () => ({
                              objRoot: $state,
                              variablePath: ["value"]
                            })
                          ),
                          operation: __wrapUserFunction(
                            {
                              type: "InteractionArgLoc",
                              actionName: "updateVariable",
                              interactionUuid: "ZjfnUa_j2",
                              componentUuid: "Qs8vlWG1HB",
                              argName: "operation"
                            },
                            () => 0
                          ),
                          value: __wrapUserFunction(
                            {
                              type: "InteractionArgLoc",
                              actionName: "updateVariable",
                              interactionUuid: "ZjfnUa_j2",
                              componentUuid: "Qs8vlWG1HB",
                              argName: "value"
                            },
                            () => currentItem
                          )
                        };
                        return __wrapUserFunction(
                          {
                            type: "InteractionLoc",
                            actionName: "updateVariable",
                            interactionUuid: "ZjfnUa_j2",
                            componentUuid: "Qs8vlWG1HB"
                          },
                          () =>
                            (({ variable, value, startIndex, deleteCount }) => {
                              const { objRoot, variablePath } = variable;

                              p.set(objRoot, variablePath, value);
                              return value;
                            })?.apply(null, [actionArgs]),
                          actionArgs
                        );
                      })()
                    : undefined;
                  if (
                    typeof $steps["updateValue"] === "object" &&
                    typeof $steps["updateValue"].then === "function"
                  ) {
                    $steps["updateValue"] = await __wrapUserPromise(
                      {
                        type: "InteractionLoc",
                        actionName: "updateVariable",
                        interactionUuid: "ZjfnUa_j2",
                        componentUuid: "Qs8vlWG1HB"
                      },
                      $steps["updateValue"]
                    );
                  }
                },
                onValueChange: p.generateStateOnChangeProp($state, [
                  "dropdownItem",
                  currentIndex,
                  "value"
                ]),
                value: p.generateStateValueProp($state, [
                  "dropdownItem",
                  currentIndex,
                  "value"
                ])
              };

              p.initializePlasmicStates(
                $state,
                [
                  {
                    name: "dropdownItem[].value",
                    initFunc: ({ $props, $state, $queries }) =>
                      (() => {
                        try {
                          return currentItem;
                        } catch (e) {
                          if (e instanceof TypeError) {
                            return undefined;
                          }
                          throw e;
                        }
                      })()
                  }
                ],
                [currentIndex]
              );
              return (
                <DropdownItem
                  data-plasmic-name={"dropdownItem"}
                  data-plasmic-override={overrides.dropdownItem}
                  {...child$Props}
                />
              );
            })()
          )}
        </div>
      ) : null}
      <IconIcon
        data-plasmic-name={"svg"}
        data-plasmic-override={overrides.svg}
        className={classNames(projectcss.all, sty.svg, {
          [sty.svgisOpen]: hasVariant($state, "isOpen", "isOpen")
        })}
        role={"img"}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "text", "dropdown", "dropdownItem", "svg"],
  text: ["text"],
  dropdown: ["dropdown", "dropdownItem"],
  dropdownItem: ["dropdownItem"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  text: "div";
  dropdown: "div";
  dropdownItem: typeof DropdownItem;
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSelect__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSelect__VariantsArgs;
    args?: PlasmicSelect__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSelect__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSelect__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicSelect__ArgProps,
          internalVariantPropNames: PlasmicSelect__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSelect__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSelect";
  } else {
    func.displayName = `PlasmicSelect.${nodeName}`;
  }
  return func;
}

export const PlasmicSelect = Object.assign(
  // Top-level PlasmicSelect renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    dropdown: makeNodeComponent("dropdown"),
    dropdownItem: makeNodeComponent("dropdownItem"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicSelect
    internalVariantProps: PlasmicSelect__VariantProps,
    internalArgProps: PlasmicSelect__ArgProps
  }
);

export default PlasmicSelect;
/* prettier-ignore-end */
