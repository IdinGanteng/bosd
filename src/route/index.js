import Dashboard from "../pages/Dashboard";
import QueePages from "../pages/Queue/QueePages";
import QueueKonten from "../pages/QueueKonten";
import ApproveKonten from "../pages/Approve/Konten";
import ApprovePayment from "../pages/Approve/Payment";
import RequestNewTemplate from "../pages/RequestTemplate";
import CreateNewTemplate from "../pages/RequestTemplate/Create";
import QueueKontenDetail from "../pages/QueueKonten/QueueKontenDetail";
import MMS from "../feature/MMS/MMS";
import CreateTemplateMMS from "../feature/MMS/Action/CreateTemplateMMS";
import FlashSMS from "../feature/FlashSMS/FlashSMS";
import CreateTemplateFlashSMS from "../feature/FlashSMS/Action/CreateTemplateFlashSMS";
import EditTemplateMMS from "../feature/MMS/Action/EditTemplateMMS";
import LogsApproval from "../feature/Logs/LogsApproval";
import Payment from "../feature/Payment/Payment";
import UserManagement from "../feature/UserManagement/UserManagement";
import {Setting} from"../Konten/Setting"


const routes = [
  {
    path: "/",
    component: Dashboard,
  },
  // MMS Feature
  {
    path: "mms",
    component: MMS,
  },
  {
    path: "mms/create",
    component: CreateTemplateMMS,
  },
  {
    path: "mms/edit/:id",
    component: EditTemplateMMS,
  },
  // Flash SMS
  {
    path: "flash-sms",
    component: FlashSMS,
  },
  {
    path: "flash-sms/create",
    component: CreateTemplateFlashSMS,
  },
  // Logs Approval
  {
    path: "logs/approval",
    component: LogsApproval,
  },

  // Payments
  {
    path: "pembayaran",
    component: Payment,
  },
  {
    path: "user-management",
    component: UserManagement,
  },
  {
    path: "queue/payment",
    component: QueePages,
  },
  {
    path: "queue/konten",
    component: QueueKonten,
  },
  {
    path: "queue/konten/:orderId",
    component: QueueKontenDetail,
  },
  {
    path: "approve/konten",
    component: ApproveKonten,
  },
  {
    path: "approve/payment",
    component: ApprovePayment,
  },
  // Request Templates
  {
    path: "template/request",
    component: RequestNewTemplate,
  },
  {
    path: "template/request/new",
    component: CreateNewTemplate,
  },
  // Settings
  {
    path:"/setting",
    component:Setting
  }
];

export default routes;
