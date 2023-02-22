from parfive import downloader

dl = Downloader()
dl.enqueue_file("http://data.sunpy.org/sample-data/predicted-sunspot-radio-flux.txt", path="./")
files = dl.download()