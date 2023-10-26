import factory, { register } from "../activityFactory";
import $Activity from "../crawlActivities/$";
import $$Activity from "../crawlActivities/$$";
import $$EvalActivity from "../crawlActivities/$$Eval";
import $EvalActivity from "../crawlActivities/$Eval";
import BrowserActivity from "../crawlActivities/Browser";
import ClearValueActivity from "../crawlActivities/ClearValue";
import ClickActivity from "../crawlActivities/Click";
import CloseActivity from "../crawlActivities/Close";
import ContentActivity from "../crawlActivities/Content";
import EvaluateActivity from "../crawlActivities/Evaluate";
import EvaluateClickActivity from "../crawlActivities/EvaluateClick";
import FetchActivity from "../crawlActivities/Fetch";
import FocusActivity from "../crawlActivities/Focus";
import CookiesActivity from "../crawlActivities/Cookies";
import GoBackActivity from "../crawlActivities/GoBack";
import GoForwardActivity from "../crawlActivities/GoForward";
import GotoActivity from "../crawlActivities/Goto";
import HoverActivity from "../crawlActivities/Hover";
import IsClosedActivity from "../crawlActivities/IsClosed";
import PageActivity from "../crawlActivities/Page";
import ReloadActivity from "../crawlActivities/Reload";
import SetCookieActivity from "../crawlActivities/SetCookie";
import SetUserAgentActivity from "../crawlActivities/SetUserAgent";
import TitleActivity from "../crawlActivities/Title";
import TypeActivity from "../crawlActivities/Type";
import URLActivity from "../crawlActivities/URL";
import UploadFileActivity from "../crawlActivities/UploadFile";
import WaitForNavigationActivity from "../crawlActivities/WaitForNavigation";
import WaitForRequestActivity from "../crawlActivities/WaitForRequest";
import WaitForResponseActivity from "../crawlActivities/WaitForResponse";
import WaitForSelectorActivity from "../crawlActivities/WaitForSelector";
import KeyboardDownActivity from "../crawlActivities/keyboard/Down";
import KeyboardUpActivity from "../crawlActivities/keyboard/Press";
import KeyboardSendCharacterActivity from "../crawlActivities/keyboard/SendCharacter";
import KeyboardTypeActivity from "../crawlActivities/keyboard/Type";
import MouseClickActivity from "../crawlActivities/mouse/Click";
import MouseDownActivity from "../crawlActivities/mouse/Down";
import MouseDragActivity from "../crawlActivities/mouse/Drag";
import MouseDragAndDropActivity from "../crawlActivities/mouse/DragAndDrop";
import MouseDragEnterActivity from "../crawlActivities/mouse/DragEnter";
import MouseDragOverActivity from "../crawlActivities/mouse/DragOver";
import MouseDropActivity from "../crawlActivities/mouse/Drop";
import MouseMoveActivity from "../crawlActivities/mouse/Move";
import MouseResetActivity from "../crawlActivities/mouse/Reset";
import MouseUpActivity from "../crawlActivities/mouse/Up";
import MouseWheelActivity from "../crawlActivities/mouse/Wheel";
import ExposeFunctionActivity from "../crawlActivities/ExposeFunction";
import RemoveExposedFunctionActivity from "../crawlActivities/RemoveExposedFunction";
import PdfActivity from "../crawlActivities/Pdf";
import ScreenshotActivity from "../crawlActivities/Screenshot";
import SetViewportActivity from "../crawlActivities/SetViewport";
import SetRequestInterceptionActivity from "../crawlActivities/SetRequestInterception";
import SetExtraHTTPHeadersActivity from "../crawlActivities/SetExtraHTTPHeaders";
import SetGeolocationActivity from "../crawlActivities/SetGeolocation";
import AddScriptTagActivity from "../crawlActivities/AddScriptTag";
import AddStyleTagActivity from "../crawlActivities/AddStyleTag";
import SelectActivity from "../crawlActivities/Select";
import ActionActivity from "../crawlActivities/ActionActivity";
import PropertyActivity from "../crawlActivities/PropertyActivity";

register("c.browser", BrowserActivity);
register("c.page", PageActivity);

register("c.page.click", ClickActivity);
register("c.page.close", CloseActivity);
register("c.page.content", ContentActivity);
register("c.page.evaluate", EvaluateActivity);
register("c.page.eClick", EvaluateClickActivity);
register("c.page.fetch", FetchActivity);
register("c.page.goBack", GoBackActivity);
register("c.page.goForward", GoForwardActivity);
register("c.page.isClosed", IsClosedActivity);
register("c.page.reload", ReloadActivity);
register("c.page.setCookie", SetCookieActivity);
register("c.page.setUserAgent", SetUserAgentActivity);
register("c.page.title", TitleActivity);
register("c.page.type", TypeActivity);
register("c.page.url", URLActivity);
register("c.page.waitForNavigation", WaitForNavigationActivity);
register("c.page.waitForRequest", WaitForRequestActivity);
register("c.page.waitForResponse", WaitForResponseActivity);
register("c.page.waitForSelector", WaitForSelectorActivity);
register("c.page.cookies", CookiesActivity);
register("c.page.goto", GotoActivity);
register("c.page.$eval", $EvalActivity),
    register("c.page.$$eval", $$EvalActivity);
register("c.page.focus", FocusActivity);
register("c.page.hover", HoverActivity);
register("c.page.clearValue", ClearValueActivity);
register("c.page.uploadFile", UploadFileActivity);
register("c.page.$", $Activity);
register("c.page.$$)", $$Activity);

// keyboard
register("c.page.keyboard.down", KeyboardDownActivity);
register("c.page.keyboard.up", KeyboardUpActivity);
register("c.page.keyboard.sendCharacter", KeyboardSendCharacterActivity);
register("c.page.keyboard.type", KeyboardTypeActivity);
register("c.page.keyboard.press", KeyboardUpActivity);

// mouse
register("c.page.mouse.click", MouseClickActivity);
register("c.page.mouse.down", MouseDownActivity);
register("c.page.mouse.drag", MouseDragActivity);
register("c.page.mouse.dragAndDrop", MouseDragAndDropActivity);
register("c.page.mouse.dragEnter", MouseDragEnterActivity);
register("c.page.mouse.dragOver", MouseDragOverActivity);
register("c.page.mouse.drop", MouseDropActivity);
register("c.page.mouse.move", MouseMoveActivity);
register("c.page.mouse.reset", MouseResetActivity);
register("c.page.mouse.up", MouseUpActivity);
register("c.page.mouse.wheel", MouseWheelActivity);
register("c.page.exposeFunction", ExposeFunctionActivity);
register("c.page.removeExposedFunction", RemoveExposedFunctionActivity);
register("c.page.pdf", PdfActivity);
register("c.page.screenshot", ScreenshotActivity);
register("c.page.setViewport", SetViewportActivity);
register("c.page.setRequestInterception", SetRequestInterceptionActivity);
register("c.page.setExtraHTTPHeaders", SetExtraHTTPHeadersActivity);
register("c.page.setGeolocation", SetGeolocationActivity);
register("c.page.addScriptTag", AddScriptTagActivity);
register("c.page.addStyleTag", AddStyleTagActivity);
register("c.page.select", SelectActivity);

register("c.page.action", ActionActivity);
register("c.page.property", PropertyActivity)

export default factory;
