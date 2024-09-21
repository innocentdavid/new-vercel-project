import copy from "copy-to-clipboard";
import { toast } from "react-toastify";

export function handleCopy(str: string) {
  copy(str, {
    debug: true,
    message: "Press #{key} to copy",
  });
  toast("Copied to Clipboard");
}
