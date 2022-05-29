import ContentLayoutCard from "../layouts/ContentLayouts/ContentLayoutCard";

const breadcrumbs = [{name: "Каталог ссылок", href: "#", current: true}];

const Proxylist = () => {
    return (
        <ContentLayoutCard header="Каталог ссылок" breadcrumbs={breadcrumbs} title="Каталог ссылок" boxed={false} >
            <ContentLayoutCard.Header>
                {/* Содержимое заголовка: кнопки и т.д. */}
            </ContentLayoutCard.Header>
            <ContentLayoutCard.Body>
                <div className="p-4">
                    {/* Содержимое страницы */}
                </div>
            </ContentLayoutCard.Body>
        </ContentLayoutCard>
    );
};

export default Proxylist;