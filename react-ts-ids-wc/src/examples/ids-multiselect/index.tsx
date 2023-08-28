import React, { useRef } from 'react';
import type IdsMultiselectType from 'ids-enterprise-wc/components/ids-multiselect/ids-multiselect';
import 'ids-enterprise-wc/components/ids-multiselect/ids-multiselect';

const IdsMultiselect = () => {
  const multiSelectRef = useRef<IdsMultiselectType>();

  return (
    <>
      <ids-layout-grid auto-fit="true">
        <ids-layout-grid-cell>
          <ids-multiselect
            ref={multiSelectRef}
            id="dropdown-1"
            label="Multiselect (with max 3 choices 3 and dirty tracker)"
            max="3"
            dirty-tracker="true"
          >
            <ids-list-box>
              <ids-list-box-option
                id="al2"
                value="al"
                tooltip="The State of Alabama"
              >
                <ids-checkbox label="Alabama"></ids-checkbox>
              </ids-list-box-option>
              <ids-list-box-option
                id="ak2"
                value="ak"
                tooltip="The State of Alaska"
              >
                <ids-checkbox label="Alaska"></ids-checkbox>
              </ids-list-box-option>
              <ids-list-box-option
                id="az2"
                value="az"
                tooltip="The State of Arizona"
              >
                <ids-checkbox label="Arizona"></ids-checkbox>
              </ids-list-box-option>
              <ids-list-box-option
                id="ar2"
                value="ar"
                tooltip="The State of Arkansas"
              >
                <ids-checkbox label="Arkansas"></ids-checkbox>
              </ids-list-box-option>
              <ids-list-box-option
                id="ca2"
                value="ca"
                tooltip="The State of California"
              >
                <ids-checkbox label="California"></ids-checkbox>
              </ids-list-box-option>
              <ids-list-box-option
                id="co2"
                value="co"
                tooltip="The State of Colorado"
              >
                <ids-checkbox label="Colorado"></ids-checkbox>
              </ids-list-box-option>
              <ids-list-box-option
                id="nj2"
                value="nj"
                tooltip="The State of New Jersey"
                selected
              >
                <ids-checkbox label="New Jersey"></ids-checkbox>
              </ids-list-box-option>
            </ids-list-box>
          </ids-multiselect>

          <ids-multiselect
            id="dropdown-2"
            tags="true"
            label="Multiselect (with tags and max 4 choices)"
            max="4"
            dirty-tracker="true"
          >
            <ids-list-box>
              <ids-list-box-option id="al3" value="al">
                <ids-checkbox label="Alabama"></ids-checkbox>
              </ids-list-box-option>
              <ids-list-box-option id="ak3" value="ak">
                <ids-checkbox label="Alaska"></ids-checkbox>
              </ids-list-box-option>
              <ids-list-box-option id="az3" value="az">
                <ids-checkbox label="Arizona"></ids-checkbox>
              </ids-list-box-option>
              <ids-list-box-option id="ar3" value="ar">
                <ids-checkbox label="Arkansas"></ids-checkbox>
              </ids-list-box-option>
              <ids-list-box-option id="ca3" value="ca">
                <ids-checkbox label="California"></ids-checkbox>
              </ids-list-box-option>
              <ids-list-box-option id="co3" value="co">
                <ids-checkbox label="Colorado"></ids-checkbox>
              </ids-list-box-option>
              <ids-list-box-option id="nj3" value="nj">
                <ids-checkbox label="New Jersey"></ids-checkbox>
              </ids-list-box-option>
              <ids-list-box-option id="ma3" value="ma">
                <ids-checkbox label="Massachusets"></ids-checkbox>
              </ids-list-box-option>
              <ids-list-box-option id="ny3" value="ny">
                <ids-checkbox label="New York"></ids-checkbox>
              </ids-list-box-option>
              <ids-list-box-option id="nh3" value="nh">
                <ids-checkbox label="New Hampshire"></ids-checkbox>
              </ids-list-box-option>
              <ids-list-box-option id="nm3" value="nm">
                <ids-checkbox label="New Mexico"></ids-checkbox>
              </ids-list-box-option>
            </ids-list-box>
          </ids-multiselect>

          <ids-multiselect
            id="dropdown-3"
            tags="true"
            disabled="true"
            label="Disabled Multiselect"
            max="3"
            dirty-tracker="true"
          >
            <ids-list-box>
              <ids-list-box-option id="al" value="al">
                <ids-checkbox label="Alabama"></ids-checkbox>
              </ids-list-box-option>
              <ids-list-box-option id="ak" value="ak">
                <ids-checkbox label="Alaska"></ids-checkbox>
              </ids-list-box-option>
              <ids-list-box-option id="az" value="az">
                <ids-checkbox label="Arizona"></ids-checkbox>
              </ids-list-box-option>
              <ids-list-box-option id="ar" value="ar">
                <ids-checkbox label="Arkansas"></ids-checkbox>
              </ids-list-box-option>
              <ids-list-box-option id="ca" value="ca">
                <ids-checkbox label="California"></ids-checkbox>
              </ids-list-box-option>
              <ids-list-box-option id="co" value="co">
                <ids-checkbox label="Colorado"></ids-checkbox>
              </ids-list-box-option>
              <ids-list-box-option id="nj" value="nj" selected>
                <ids-checkbox label="New Jersey"></ids-checkbox>
              </ids-list-box-option>
            </ids-list-box>
          </ids-multiselect>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsMultiselect;
