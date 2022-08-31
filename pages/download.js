import React from "react";
import {StyleSheet, Document, Page, Text, View, BlobProvider} from "@react-pdf/renderer";

const pdfFile = () => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.title}>Mutasi Rekening</Text>
                    <View style={styles.section}>
                        <Text>Ini adalah mutasi rekening</Text>
                        <Text>Bank Kit</Text>
                    </View>
                </View>
            </Page>
        </Document>
    )
}

const DownloadPdf = () => {
    const [hasMounted, setHasMounted] = React.useState(false);
    const [download, setDownload] = React.useState(false);

    React.useEffect(() => {
        setHasMounted(true);
        return (() => {
            setHasMounted(false);
        })
    }, []);

    return (
        <>
            {hasMounted ? download ?
                (<div style={{ width: "100vw", height: "100vh" }}>
                    <BlobProvider document={pdfFile()}>
                        { ({ url }) => <iframe src={url} style={{ width: "100%", height: "100%" }} /> }
                    </BlobProvider>
                </div>)
            : (
                <button onClick={() => setDownload(true)}>
                    DOWNLOAD
                </button>
            ) : ( null )}
        </>
    )
};


const styles = StyleSheet.create({
    page: {
        backgroundColor: "white"
    },
    title: {
        fontSize: "16pt",
        fontWeight: "bold"
    },
    section: {
        margin: 4, padding: 8, fontSize: "12pt"
    }
})

export default DownloadPdf;