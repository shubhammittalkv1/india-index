"use client";
import { useContext, useState } from "react";
import themesEnum from '../../core/dictionary/theme-enum';
import IndiaIndexHeader from "./index-index-header";
import IndiaIndexFooter from "./index-index-footer";
export default function IndiaIndexLayout(props: any) {
    return (
        <>
        <IndiaIndexHeader></IndiaIndexHeader>
        <div className="my-2">
          {props.children}
        </div>
        {/* <IndiaIndexFooter></IndiaIndexFooter> */}
        </>
  )
}