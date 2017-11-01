<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<?php
  $DOCUMENT_ROOT = $_SERVER['DOCUMENT_ROOT'];
  /* $Id$ */
  $TITLE="ProteomeXchange ProteomeCentral Information";
  $SUBTITLE="TEMPLATESUBTITLE";
  include("$DOCUMENT_ROOT/includes/header.inc.php");
?>

<!-- BEGIN main content -->

<H2><?php echo "$TITLE"; ?></H2>

<P>The ProteomeXchange ProteomeCentral server has two main components, the front-facing dataset browsing interface and the back-end dataset management/announcement system. Documentation and information for this system is provided below.</P>

<h3>General Documentation</h3> 
<UL>
<LI> <a href="serviceDocs.php">Dataset submission service documentation</a>
<LI>
<LI> <a href="/schemas/proteomeXchange-1.4.0.html">ProteomeXchange XML schema 1.4.0 documentation (autogenerated)</a>
<LI> <a href="/schemas/proteomeXchange-1.4.0.xsd">ProteomeXchange XML schema 1.4.0 xsd</a>
<LI> <a href="/schemas/proteomeXchange-1.4.0_mappingFile.xml">ProteomeXchange XML schema 1.4.0 mapping file</a>
<LI>
<LI> <a href="/schemas/proteomeXchange-1.3.0.html">ProteomeXchange XML schema 1.3.0 documentation (autogenerated)</a>
<LI> <a href="/schemas/proteomeXchange-1.3.0.xsd">ProteomeXchange XML schema 1.3.0 xsd</a>
<LI> <a href="/schemas/proteomeXchange-1.3.0_mappingFile.xml">ProteomeXchange XML schema 1.3.0 mapping file</a>
</UL>
<h3>ProteomeXchange Administrator Tools</h3> 
<UL>
<LI> Get a <a href="http://proteomecentral.proteomexchange.org/cgi/GetDataset?detailLevel=extended">listing of all requested PX IDs</a>
<LI> Get a <a href="http://proteomecentral.proteomexchange.org/cgi/GetDataset?detailLevel=extended&test=yes">listing of all requested PX IDs in test mode</a>
<LI> <a href="/cgi/FindMissingArticles">Tool to search PubMed</a> for articles that correspond to PXDs with publication pending status
</UL>


<!-- END main content -->

<?php
  include("$DOCUMENT_ROOT/includes/footer.inc.php");
?>
</html>
