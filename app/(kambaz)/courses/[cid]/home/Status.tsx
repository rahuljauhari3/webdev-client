import {
  FaBell,
  FaBullhorn,
  FaChartBar,
  FaCheckCircle,
  FaCloudDownloadAlt,
  FaFileImport,
  FaHome,
  FaRegLightbulb,
  FaStream,
} from "react-icons/fa";

import { MdDoNotDisturbAlt } from "react-icons/md";

const actionButton =
  "mb-1 flex w-full items-center gap-2 rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm";

export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2 className="mb-3 text-xl font-semibold">
        Course Status
      </h2>

      <div className="mb-2 flex gap-1">
        <button
          type="button"
          className="flex min-w-0 flex-1 items-center justify-center gap-1 rounded border border-neutral-300 bg-white px-2 py-2 text-xs"
        >
          <MdDoNotDisturbAlt className="shrink-0 text-base" />
          Unpublish
        </button>

        <button
          type="button"
          className="flex min-w-0 flex-1 items-center justify-center gap-1 rounded border border-green-600 bg-green-600 px-2 py-2 text-xs text-white"
        >
          <FaCheckCircle className="shrink-0 text-base" />
          Publish
        </button>
      </div>

      {/* On your own: finish all status actions with icons. */}
      <button type="button" className={actionButton}>
        <FaFileImport className="shrink-0" />
        Import Existing Content
      </button>

      <button type="button" className={actionButton}>
        <FaCloudDownloadAlt className="shrink-0" />
        Import from Commons
      </button>

      <button type="button" className={actionButton}>
        <FaHome className="shrink-0" />
        Choose Home Page
      </button>

      <button type="button" className={actionButton}>
        <FaStream className="shrink-0" />
        View Course Stream
      </button>

      <button type="button" className={actionButton}>
        <FaBullhorn className="shrink-0" />
        New Announcement
      </button>

      <button type="button" className={actionButton}>
        <FaChartBar className="shrink-0" />
        New Analytics
      </button>

      <button type="button" className={actionButton}>
        <FaBell className="shrink-0" />
        View Course Notifications
      </button>

      {/* With AI: a separate sample action. */}
      <button
        id="wd-ai-status"
        type="button"
        className={actionButton}
      >
        <FaRegLightbulb className="shrink-0" />
        Sample action
      </button>
    </div>
  );
}