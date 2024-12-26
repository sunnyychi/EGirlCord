import { findAssetId } from "@lib/api/assets";
import { clipboard } from "@metro/common";
import { LegacyFormText, TableRow } from "@metro/common/components";
import { showToast } from "@ui/toasts";
import { ImageURISource } from "react-native";

interface VersionProps {
    label: string;
    version: string;
    icon: string | ImageURISource;
}

export default function Version({ label, version, icon }: VersionProps) {
    return (
        <TableRow
            label={label}
            icon={<TableRow.Icon source={typeof icon === "string" ? findAssetId(icon) : icon} />}
            trailing={<LegacyFormText>{version}</LegacyFormText>}
            onPress={() => {
                clipboard.setString(`${label} - ${version}`);
                showToast.showCopyToClipboard();
            }}
        />
    );
}
