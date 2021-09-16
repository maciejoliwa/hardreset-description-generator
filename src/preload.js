const { contextBridge, remote } = require('electron');
const { getAll } = require('./db.js');
const { writeFile } = require('fs');
const { dialog } = remote;
const { join } = require('path');

contextBridge.exposeInMainWorld(
    'electron',
    {
        getDb: async (descriptionType) => {

            switch (descriptionType) {
                case "game":
                    const d = await Promise.all([
                        getAll('games'),
                        getAll('sentences'),
                        getAll('titles'),
                        getAll('howtos'),
                        getAll('tags')
                    ]);
        
                    return d;
                case "benchmark":
                    const d2 = await Promise.all([
                        getAll('benchmarkType'),
                        getAll('benchmarkSentences'),
                        getAll('benchmarkTitles'),
                        getAll('benchmarkHowTos'),
                        getAll('benchmarkPoints'),
                        getAll('benchmarkTags'),
                    ]);
        
                    return d2;

                case "versus":
                    const d3 = await Promise.all([
                        getAll('benchmarkType'),
                        getAll('benchmarkTwoDevicesSentences'),
                        getAll('benchmarkTwoDevicesTitles'),
                        getAll('benchmarkTwoDevicesHowTos'),
                        getAll('benchmarkTwoDevicesPoints'),
                        getAll('benchmarkTwoDevicesTags')
                    ]);
        
                    return d3;
                default:
                    return []
            }

        },

        saveDesc: async (data) => {
            const p = await dialog.showOpenDialog({ properties: ['openFile', 'openDirectory'], title: 'Choose saving directory' })
            const path = p.filePaths[0];

            const savingPath = join(path, 'description.txt');
            writeFile(savingPath, data, { encoding: 'utf-8' }, () => {});

            dialog.showMessageBox({ message: "Opisy wygenerowane" })
        }
    }
)
