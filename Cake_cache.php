// First creae a cache configuration in bootstrap.php
Cache::config('long', array(
    'engine' => 'File',
    'duration' => '+1 week',
    'probability' => 100,
    'path' => CACHE . 'long' . DS,
));

////// Element Cache ///////
$header = Cache::read('elementHeader', 'long');
if(!$header){
	echo "its header";
	echo $this->element('header', [], ['cache'=>['key'=>'header', 'config'=>'long']]);	
}
// Cache::delete('elementHeader', 'long');
echo $header;


///////// Query cache ///////
$globalSettings = Cache::read('globalSettings', 'long');
  if (!$globalSettings) {
    echo "hii";
      $this->loadModel('Setting');
      $globalSettings = $this->Setting->find('first');
      Cache::write('globalSettings', $globalSettings, 'long');
  }
$this->set('globalSettings', $globalSettings);
// Cache::delete('globalSettings', 'long');
