import React from "react"

export default function Sidebar() {
  return (
    <>
      {/*<!-- Component: Leading Icon One Line List --> */}
      <ul className="divide-y divide-slate-100">
        <li className="flex items-center gap-4 px-4 py-3">
          <div className="flex items-center self-center text-emerald-500">
          </div>

          <div className="flex min-h-[2rem] flex-col items-start justify-center gap-0">
            <h4 className="text-base text-slate-700 ">Dashboard</h4>
          </div>
        </li>
        <li className="flex items-center gap-4 px-4 py-3">
          <div className="flex items-center self-center text-emerald-500">
          </div>
          <div className="flex min-h-[2rem] flex-col items-start justify-center gap-0">
            <h4 className="text-base text-slate-700 ">User profile</h4>
          </div>
        </li>
        <li className="flex items-center gap-4 px-4 py-3">
          <div className="flex items-center self-center text-emerald-500">
          </div>
          <div className="flex min-h-[2rem] flex-col items-start justify-center gap-0">
            <h4 className="text-base text-slate-700 ">Analytics</h4>
          </div>
        </li>
        <li className="flex items-center gap-4 px-4 py-3">
          <div className="flex items-center self-center text-emerald-500">
          </div>
          <div className="flex min-h-[2rem] flex-col items-start justify-center gap-0">
            <h4 className="text-base text-slate-700 ">Cloud settings</h4>
          </div>
        </li>
        <li className="flex items-center gap-4 px-4 py-3">
          <div className="flex items-center self-center text-emerald-500">
          </div>
          <div className="flex min-h-[2rem] flex-col items-start justify-center gap-0">
            <h4 className="text-base text-slate-700 ">Settings</h4>
          </div>
        </li>
      </ul>
      {/*<!-- End Leading Icon One Line List --> */}
    </>
  )
}